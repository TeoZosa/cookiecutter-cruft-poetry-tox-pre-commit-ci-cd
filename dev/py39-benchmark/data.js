window.BENCHMARK_DATA = {
  "lastUpdate": 1628535941499,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "3c63c3dc0d90fef458ea769b852b25325c1b2003",
          "message": ":recycle: Tightly couple env var with sole corresponding target (`test`)\n\nSince `TOX_PARALLEL_NO_SPINNER` is only relevant to tox invocations that\n use the `-p`/`--parallel`, removing this environment variable from the\nglobal scope and tightly coupling it to the `test` target (the only\ndependent target) explicitly communicates that this is the only place\nwhere this variable is used. In other words, it removes any confusion\naround if `TOX_PARALLEL_NO_SPINNER` affects the behavior of any other\ntargets.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-09T18:59:08Z",
          "tree_id": "4a0908da6576c831e9c9e8cbf1627c2fd7a8d7e9"
        },
        "date": 1628535939321,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14435.769208426293,
            "unit": "iter/sec",
            "range": "stddev: 0.00006592741607440973",
            "extra": "mean: 69.27237375174236 usec\nrounds: 9311"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3793936.936731561,
            "unit": "iter/sec",
            "range": "stddev: 0.000001043158792528995",
            "extra": "mean: 263.578445471218 nsec\nrounds: 153847"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11716.789949105483,
            "unit": "iter/sec",
            "range": "stddev: 0.000057465263273696605",
            "extra": "mean: 85.3476083759908 usec\nrounds: 7474"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 111338.36451394868,
            "unit": "iter/sec",
            "range": "stddev: 0.000011404925648029834",
            "extra": "mean: 8.981630046081001 usec\nrounds: 40651"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14495.93390812785,
            "unit": "iter/sec",
            "range": "stddev: 0.00007468949900193178",
            "extra": "mean: 68.98486198528413 usec\nrounds: 11977"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3731831.0958939423,
            "unit": "iter/sec",
            "range": "stddev: 6.925283347095144e-7",
            "extra": "mean: 267.9649679482231 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}