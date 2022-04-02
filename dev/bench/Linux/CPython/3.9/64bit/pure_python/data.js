window.BENCHMARK_DATA = {
  "lastUpdate": 1648861543664,
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
          "id": "faf7bd6b2ec5359733b1f416509672e5af083ecd",
          "message": "Merge pull request #388 from TeoZosa/dependabot/pip/emoji-1.6.1",
          "timestamp": "2021-10-13T13:34:06Z",
          "tree_id": "987b8925866869ce08f88f559f013fa21cd2bb18"
        },
        "date": 1634132516341,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 106586.06856551766,
            "unit": "iter/sec",
            "range": "stddev: 0.000004898583699358852",
            "extra": "mean: 9.38208917411479 usec\nrounds: 89286"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5022847.278242321,
            "unit": "iter/sec",
            "range": "stddev: 4.610944079276275e-9",
            "extra": "mean: 199.09026586006974 nsec\nrounds: 50252"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 51062.412431505116,
            "unit": "iter/sec",
            "range": "stddev: 0.000009316309607256232",
            "extra": "mean: 19.583876914186053 usec\nrounds: 81301"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 130307.31069187688,
            "unit": "iter/sec",
            "range": "stddev: 3.4883089760099757e-7",
            "extra": "mean: 7.674166512150559 usec\nrounds: 136987"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 106022.86576900046,
            "unit": "iter/sec",
            "range": "stddev: 0.000004950102758304459",
            "extra": "mean: 9.4319276577448 usec\nrounds: 88496"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5016498.680191777,
            "unit": "iter/sec",
            "range": "stddev: 4.48139890142734e-9",
            "extra": "mean: 199.34222328182395 nsec\nrounds: 54532"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "e5bd23c32d3b3f9c651b834d177fa6bf04d5b949",
          "message": "Merge pull request #581 from TeoZosa/breaking/drop-python37-support\n\n➖ Drop Python 3.7 support",
          "timestamp": "2022-04-02T01:03:12Z",
          "tree_id": "30a2b44bdc4b6628ea909dedb95ead24b2898ed0"
        },
        "date": 1648861541023,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 85529.69292342068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000065019381018029605",
            "extra": "mean: 11.691846022355692 usec\nrounds: 90091"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4986168.984183085,
            "unit": "iter/sec",
            "range": "stddev: 1.1356523674199056e-8",
            "extra": "mean: 200.55477525368792 nsec\nrounds: 51547"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 45651.15642812865,
            "unit": "iter/sec",
            "range": "stddev: 0.000012163758650436696",
            "extra": "mean: 21.905250123824572 usec\nrounds: 78741"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 133916.46569905512,
            "unit": "iter/sec",
            "range": "stddev: 3.976868583069187e-7",
            "extra": "mean: 7.467341635548075 usec\nrounds: 140846"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 86717.18059229133,
            "unit": "iter/sec",
            "range": "stddev: 0.000006439039068135677",
            "extra": "mean: 11.531740229212367 usec\nrounds: 96154"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5012082.340723085,
            "unit": "iter/sec",
            "range": "stddev: 4.59394942672374e-9",
            "extra": "mean: 199.51787141943464 nsec\nrounds: 51283"
          }
        ]
      }
    ]
  }
}