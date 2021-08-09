window.BENCHMARK_DATA = {
  "lastUpdate": 1628536767113,
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
          "id": "b68f73237b425b68799a5f6acb172efee53600f3",
          "message": ":memo: Add emojis to pre-ToC sections\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-09T19:14:06Z",
          "tree_id": "d795a203ea31ddd941caeb7101dcc8f344bed31a"
        },
        "date": 1628536765636,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16473.72528663554,
            "unit": "iter/sec",
            "range": "stddev: 0.00001007014382813929",
            "extra": "mean: 60.702724040885826 usec\nrounds: 7088"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5012683.480015971,
            "unit": "iter/sec",
            "range": "stddev: 2.465295401141882e-8",
            "extra": "mean: 199.4939445083221 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14531.968864722025,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030112945830751177",
            "extra": "mean: 68.81380006446419 usec\nrounds: 6192"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150633.36516379198,
            "unit": "iter/sec",
            "range": "stddev: 4.884197106268072e-7",
            "extra": "mean: 6.638635463747654 usec\nrounds: 44248"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16696.588010610558,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018649725347234015",
            "extra": "mean: 59.89247619720312 usec\nrounds: 14389"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5010706.590513304,
            "unit": "iter/sec",
            "range": "stddev: 1.5745924396998393e-8",
            "extra": "mean: 199.57265146857657 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}