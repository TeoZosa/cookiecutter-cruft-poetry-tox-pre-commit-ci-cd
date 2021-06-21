window.BENCHMARK_DATA = {
  "lastUpdate": 1624281950120,
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
          "id": "634359321d1ecab50ff185c521a269d0007c7c6d",
          "message": "Merge pull request #219 from TeoZosa/dependabot/pip/icontract-2.5.3",
          "timestamp": "2021-06-21T13:20:05Z",
          "tree_id": "f070cdf3e18c5feb0a3c2d8b5a51c90e82665453"
        },
        "date": 1624281948499,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15234.717718904238,
            "unit": "iter/sec",
            "range": "stddev: 0.000025589398172874394",
            "extra": "mean: 65.63954898613804 usec\nrounds: 1776"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3879104.0805085115,
            "unit": "iter/sec",
            "range": "stddev: 9.71622805009766e-7",
            "extra": "mean: 257.79148464325556 nsec\nrounds: 185186"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11619.72463627248,
            "unit": "iter/sec",
            "range": "stddev: 0.0001303514015101906",
            "extra": "mean: 86.06055920450731 usec\nrounds: 8496"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 121009.85360630901,
            "unit": "iter/sec",
            "range": "stddev: 0.000008544804241216226",
            "extra": "mean: 8.263789850150381 usec\nrounds: 42917"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14567.204904760087,
            "unit": "iter/sec",
            "range": "stddev: 0.000034784902079542084",
            "extra": "mean: 68.64734906510671 usec\nrounds: 8666"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3794892.737596357,
            "unit": "iter/sec",
            "range": "stddev: 4.390052538802487e-7",
            "extra": "mean: 263.51205927189557 nsec\nrounds: 11508"
          }
        ]
      }
    ]
  }
}