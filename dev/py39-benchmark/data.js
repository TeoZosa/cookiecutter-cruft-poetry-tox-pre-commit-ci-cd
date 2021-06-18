window.BENCHMARK_DATA = {
  "lastUpdate": 1624022621213,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "1a8fb2fc704aa708cd5c81f34cf7ff3227cd5af2",
          "message": "Merge pull request #217 from TeoZosa/dependabot/pip/types-emoji-1.2.2",
          "timestamp": "2021-06-18T13:16:36Z",
          "tree_id": "cb472d46ae985bec6fe64668ca0fe05014ac1c15"
        },
        "date": 1624022619543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14045.103077294723,
            "unit": "iter/sec",
            "range": "stddev: 0.00005106748475708117",
            "extra": "mean: 71.19919266499349 usec\nrounds: 11834"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3885948.0920128818,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010924987167426763",
            "extra": "mean: 257.3374569916116 nsec\nrounds: 185151"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11540.148012753825,
            "unit": "iter/sec",
            "range": "stddev: 0.000042660168177318454",
            "extra": "mean: 86.65400122206665 usec\nrounds: 4909"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 119497.42072923791,
            "unit": "iter/sec",
            "range": "stddev: 0.000008993765608270058",
            "extra": "mean: 8.368381458758348 usec\nrounds: 46081"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14219.447212471772,
            "unit": "iter/sec",
            "range": "stddev: 0.00003733122093245387",
            "extra": "mean: 70.32622190283932 usec\nrounds: 5917"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3920567.461238342,
            "unit": "iter/sec",
            "range": "stddev: 4.890404289916126e-7",
            "extra": "mean: 255.06511745714897 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}