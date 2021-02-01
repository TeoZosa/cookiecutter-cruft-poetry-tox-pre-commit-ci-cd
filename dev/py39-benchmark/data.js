window.BENCHMARK_DATA = {
  "lastUpdate": 1612201195413,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "549936943e5363458242f7f108d4773780ad2ade",
          "message": "Merge pull request #57 from TeoZosa/add-performance-testing-component\n\n✨ Add Performance Testing Component\r\n\r\nCloses RND-877.",
          "timestamp": "2021-02-01T09:36:10-08:00",
          "tree_id": "1da83d858d9ac303613a2031b4738c194cbd7d6d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/549936943e5363458242f7f108d4773780ad2ade"
        },
        "date": 1612201194415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16638.435052506087,
            "unit": "iter/sec",
            "range": "stddev: 0.000002102534132308661",
            "extra": "mean: 60.10180626028165 usec\nrounds: 7252"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5199394.193401765,
            "unit": "iter/sec",
            "range": "stddev: 5.92741759620191e-9",
            "extra": "mean: 192.330099008214 nsec\nrounds: 48077"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 15070.604106270897,
            "unit": "iter/sec",
            "range": "stddev: 0.000009394549072388939",
            "extra": "mean: 66.3543407383317 usec\nrounds: 8913"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 206773.3119539345,
            "unit": "iter/sec",
            "range": "stddev: 3.1581779764848216e-7",
            "extra": "mean: 4.836214067233119 usec\nrounds: 55249"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16616.738048476298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023154200027084586",
            "extra": "mean: 60.180283102657256 usec\nrounds: 9901"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4952506.154049344,
            "unit": "iter/sec",
            "range": "stddev: 1.0180972052898441e-7",
            "extra": "mean: 201.9179722133364 nsec\nrounds: 185151"
          }
        ]
      }
    ]
  }
}